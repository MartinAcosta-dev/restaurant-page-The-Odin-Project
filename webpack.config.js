module.exports = {
    entry:'./src/index.js',
    output:{
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader']
            }
        ]
     
    }
}