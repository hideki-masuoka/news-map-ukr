import plugin from 'windicss/plugin';

module.exports = {
	plugins: [
		plugin(function ({ addComponents }) {
			addComponents({
				'.d-gui-box': {
					boxShadow: '-8px -8px 10px rgba(255,255,255,0.75), 8px 8px 10px rgba(0,0,0,0.125)',
					borderWidth: '0px',
					padding: '1rem'
				},
				'.d-gui-box-sm': {
					boxShadow: '-4px -4px 6px rgba(255,255,255,0.5), 4px 4px 6px rgba(0,0,0,0.125)',
					borderWidth: '0px'
				},
				'.d-gui-box-xs': {
					boxShadow: '-2px -2px 4px rgba(255,255,255,0.5), 2px 2px 4px rgba(0,0,0,0.125)',
					borderWidth: '0px'
				},
				'.d-gui-box-push': {
					boxShadow:
						'inset -8px -8px 10px rgba(255,255,255,0.75), inset 8px 8px 10px rgba(0,0,0,0.125)'
				},
				'.d-gui-box-push-sm': {
					boxShadow:
						'inset -3px -3px 4px rgba(255,255,255,0.75), inset 3px 3px 4px rgba(0,0,0,0.125)',
					paddingTop: '0.5rem',
					paddingBottom: '0'
				},
				'.d-gui-box-push-xs': {
					boxShadow:
						'inset -1px -1px 2px rgba(255,255,255,0.5), inset 1px 1px 2px rgba(0,0,0,0.125)',
					paddingTop: '2px',
					paddingBottom: '0'
				},
				'.d-gui-box-pull': {
					boxShadow:
						'-8px -8px 10px rgba(255,255,255,0.9), 8px 8px 10px rgba(0,0,0,0.1), inset -6px -6px 8px rgba(0,0,0,0.125), inset 6px 6px 10px rgba(255,255,255,0.9)'
				},
				'.d-gui-box-pull-sm': {
					boxShadow:
						'-4px -4px 9px rgba(255,255,255,0.9), 4px 4px 9px rgba(0,0,0,0.1), inset -3px -3px 9px rgba(0,0,0,0.125), inset 3px 3px 9px rgba(255,255,255,0.9)',
					paddingTop: '0.25rem',
					paddingBottom: '0.25rem'
				},
				'.d-gui-chips': {
					borderRadius: '9999px',
					padding: '0.25rem 1rem',
					marginBottom: '0.25rem',
					backgroundColor: '#fafaf9'
				},
				'.d-gui-chips svg': {
					borderRadius: '9999px',
					margin: '0.25rem auto 0.25rem -0.5rem',
					padding: '0.25rem',
					display: 'inline',
					width: '1.5rem',
					height: '1.5rem',
					backgroundColor: '#d6d3d1',
					boxShadow: 'inset -1px -1px 2px #f5f5f4, inset 1px 1px 2px #a8a29e'
				}
			});
		})
	]
};
