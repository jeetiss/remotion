import React, {useCallback, useEffect, useState} from 'react';
import {Internals, interpolate} from 'remotion';
import styled from 'styled-components';
import {TIMELINE_PADDING} from '../helpers/timeline-layout';
import {useWindowSize} from '../hooks/use-window-size';

const Container = styled.div`
	flex: 1;
	position: relative;
	padding: ${TIMELINE_PADDING}px;
	user-select: none;
`;

const Inner = styled.div`
	overflow-y: auto;
	overflow-x: hidden;
`;

const getFrameFromX = (
	clientX: number,
	durationInFrames: number,
	width: number
) => {
	const pos = clientX - TIMELINE_PADDING;
	const frame = Math.round(
		interpolate(
			pos,
			[0, width - TIMELINE_PADDING * 2],
			[0, durationInFrames - 1 ?? 0],
			{
				extrapolateLeft: 'clamp',
				extrapolateRight: 'clamp',
			}
		)
	);
	return frame;
};

export const TimelineDragHandler: React.FC = ({children}) => {
	const {width} = useWindowSize();
	const [dragging, setDragging] = useState<
		| {
				dragging: false;
		  }
		| {
				dragging: true;
				wasPlaying: boolean;
		  }
	>({
		dragging: false,
	});
	const [playing, setPlaying] = Internals.Timeline.usePlayingState();
	const setTimelinePosition = Internals.Timeline.useTimelineSetFrame();
	const videoConfig = Internals.useUnsafeVideoConfig();

	const onPointerDown = useCallback(
		(e: React.PointerEvent<HTMLDivElement>) => {
			if (!videoConfig) {
				return;
			}
			const frame = getFrameFromX(
				e.clientX,
				videoConfig.durationInFrames,
				width
			);
			setTimelinePosition(frame);
			setDragging({
				dragging: true,
				wasPlaying: playing,
			});
			setPlaying(false);
		},
		[playing, setPlaying, setTimelinePosition, videoConfig, width]
	);

	const onPointerMove = useCallback(
		(e: PointerEvent) => {
			if (!dragging.dragging) {
				return;
			}
			if (!videoConfig) {
				return;
			}
			const frame = getFrameFromX(
				e.clientX,
				videoConfig.durationInFrames,
				width
			);
			setTimelinePosition(frame);
		},
		[dragging.dragging, setTimelinePosition, videoConfig, width]
	);

	const onPointerUp = useCallback(() => {
		setDragging({
			dragging: false,
		});
		if (!dragging.dragging) {
			return;
		}
		setPlaying(dragging.wasPlaying);
	}, [dragging, setPlaying]);

	useEffect(() => {
		if (!dragging.dragging) {
			return;
		}
		window.addEventListener('pointermove', onPointerMove);
		window.addEventListener('pointerup', onPointerUp);
		return () => {
			window.removeEventListener('pointermove', onPointerMove);
			window.removeEventListener('pointerup', onPointerUp);
		};
	}, [dragging.dragging, onPointerMove, onPointerUp]);

	return (
		<Container onPointerDown={onPointerDown} onPointerUp={onPointerUp}>
			<Inner>{children}</Inner>
		</Container>
	);
};
