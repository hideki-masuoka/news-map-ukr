import plugin from 'windicss/plugin';

module.exports = {
	plugins: [
		plugin(function ({ addComponents }) {
			addComponents({
				'.d-gui-box': {
					boxShadow: '-8px -8px 10px #fff, 8px 8px 10px #d6d3d1',
					borderWidth: '0px',
					padding: '1rem'
				},
				'.d-gui-box-push': {
					boxShadow: ' inset -8px -8px 10px #fff, inset 8px 8px 10px #d6d3d1'
				},
				'.d-gui-box-push-sm': {
					boxShadow: 'inset -3px -3px 4px #fff, inset 3px 3px 4px #d6d3d1',
					paddingTop: '0.5rem',
					paddingBottom: '0'
				},
				'.d-gui-box-push-xs': {
					boxShadow: 'inset -1px -1px 2px #fff, inset 1px 1px 2px #d6d3d1',
					paddingTop: '2px',
					paddingBottom: '0'
				},
				'.d-gui-box-pull': {
					boxShadow:
						'-8px -8px 10px #fff, 8px 8px 10px #d6d3d1, inset -6px -6px 8px #e7e5e4, inset 6px 6px 10px #fff'
				},
				'.d-gui-box-pull-sm': {
					boxShadow:
						'-4px -4px 5px #fff, 4px 4px 5px #d6d3d1, inset -3px -3px 4px #e7e5e4, inset 3px 3px 4px #fff',
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
