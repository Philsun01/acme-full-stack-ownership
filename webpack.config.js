module.exports ={
    module: {
        rules: [
            {
                test: /\.js$/, // regular expression testing to see if file is JS or JSX then loads babel
                exclude: /node_modules/, // don't care about this folder
                use: {
                    loader: 'babel-loader', // load babel loader to the files that are JS
                    options: {
                        presets: ['@babel/preset-react'] // use babel-loader with react preset
                    }
                }  
            }
        ]

    }
}