var convict = require( 'convict' );
var colog = require( 'colog' );

var conf = convict( {
	port: {
		doc: 'The port to bind.',
		format: 'port',
		default: 3000,
		env: 'PORT'
	},
	secret: {
		doc: 'A secret string used to generate cookies.',
		format: String,
		default: 'They dined on mince, and slices of quince, which they ate with a runcible spoon',
	    env: 'SECRET'
	},
	'i18n-cookie': {
		doc: 'The name of the cookie storing the current language.',
		format: String,
		default: 'cinequeue-locale',
		env: 'I18NCOOKIE'
	},
	allowfs: {
		doc: 'Whether access to the file system by the end user is allowed.',
		format: Boolean,
		default: false,
		env: 'ALLOWFS'
	},
	fspath: {
		doc: 'The file path to the files to be accessible to the end user.',
		format: String,
		default: '~',
		env: 'FSPATH'
	},
	allowplaylist: {
		doc: 'Whether to allow users to view the playlist.',
		format: Boolean,
		default: true,
		env: 'ALLOWPL'
	},
	allowkill: {
		doc: 'Whether to allow users to kill the program via the interface.',
		format: Boolean,
		default: false,
		env: 'ALLOWKILL'
	},
	playremote: {
		doc: 'Whether to play files remotely via SSH.',
		format: Boolean,
		default: false,
		env: 'REMOTEPLAY'
	}
} );

try {
	conf.loadFile( 'config.json' );
	colog.success( 'Loaded configuration from config.json' );
} catch ( e ) {
	colog.warning( 'Unable to load configuration file.' );
	colog.info( 'Using default configuration settings.' );
	colog.info( 'Create config.json to change from the defaults.' );
}

module.exports = conf;
