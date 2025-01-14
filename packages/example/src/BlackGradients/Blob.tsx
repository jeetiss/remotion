import React, {useState} from 'react';

export const SvgBlob: React.FC<{
	style?: React.SVGProps<HTMLOrSVGElement>['style'];
	gradient: [string, string];
	d: string;
}> = ({style, gradient, d}) => {
	const [id] = useState(Math.random());
	return (
		<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={style}>
			<defs>
				<linearGradient id={String(id)} gradientTransform="rotate(90)">
					<stop offset="5%" stopColor={gradient[0]} />
					<stop offset="95%" stopColor={gradient[1]} />
				</linearGradient>
			</defs>
			<path fill={`url(#${id})`} d={d} transform="translate(100 100)" />
		</svg>
	);
};
