var webpack = require('webpack');
var path = require('path');
var colors = require('colors');
var oldperc = 0;

var config = {
	cache: true,
	entry: {
		build: ['babel-polyfill', './js/main.js'],
	},
	target: 'web',
	watchOptions: {
		poll: true,
		aggregateTimeout: 30
	},
	output: {
		path: path.join(__dirname, 'public/js/'),
		filename: '[name].js',
		chunkFilename: path.join(__dirname, 'public/js/chunks/[chunkhash][name].js'),
		publicPath: path.join(__dirname, 'public/js/chunks/[hash]')
	},
	resolve: {
		unsafeCache: true,
		extensions: ['', '.js', '.jsx'],
		root: [
			path.resolve(__dirname, 'assets/'),
		],
		alias: {}
	},
	externals: {},
	amd: {},
	noParse: [
		/(node_modules|bower_components)/,
		/\.min\.js/,
		/babel/
	],
	module: {
		loaders: [
			{ test: /\.gif$/, loader: 'url-loader?limit=300&name=[name].[ext]'},
			{ test: /\.png$/, loader: 'url-loader?limit=300&name=[name].[ext]'},
			{ test: /\.html$/, loader: 'html!posthtml' },
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
			{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
			{
				exclude: [
					/(node_modules|bower_components)/,
					/\.min\.js/,
					/babel/
				],
				test: /\.(js|jsx)$/,
				loader: 'babel',
				include: [
					path.resolve(__dirname, 'assets/js/modules/'),
				],
				plugins: [
					'transform-runtime',
					'transform-class-properties',
					'transform-react-remove-prop-types',
					'transform-react-constant-elements',
					'transform-react-inline-elements',
					'syntax-object-rest-spread'
				],
				query: {
					cacheDirectory: /tmp/,
					presets: ["es2015", "stage-0", "react"]
				}
			}
		],
	},
	posthtml: function () {
		return {
			defaults: [ PostHTML ]
		}
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.ProgressPlugin(function handler(percentage, msg) {
			var perc = parseInt(percentage * 100);
			if ( perc % 10 === 0 && perc != oldperc && ( Math.abs(perc - oldperc) >= 15) ){
				oldperc = perc;
				console.log( ('webpack progress: ').green + (perc+'% ').yellow + (msg).green );
			}
		}),
		new webpack.optimize.LimitChunkCountPlugin({maxChunks: 15}),
		new webpack.optimize.MinChunkSizePlugin({minChunkSize: 10000}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.AggressiveMergingPlugin(),
		new webpack.ProvidePlugin({

		})
	]
}

var env =  process.env.NODE_ENV || 'production';

console.log( ( '------- NODE_ENV: ' + env + ' -------').bold.yellow.bgBlack );

if (env === 'production') {
	// config.devtool = 'eval';
	config.stats = {
		colors: true,
		reasons: false
	};

	config.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			sourceMap: false,
			beautify: false,
			comments: false,
			compressor: {
				pure_getters: true,
				sequences     : true,
				booleans      : true,
				loops         : true,
				unused      : true,
				warnings    : false,
				drop_console: false,
				unsafe      : true,
				unsafe_comps: true
			}
		})
	)
} else {
	config.devtool = 'eval';

	config.stats = {
		profile: true,
		colors: true,
		modules: true,
		reasons: true,
		errorDetails: true
	};

	config.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			minimize: false,
			comments: true,
			sourceMap: false
		})
	)
}

module.exports = config;