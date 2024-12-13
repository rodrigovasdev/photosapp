module.exports = {
images: {
    remotePatterns: [
    {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '**',
    },
    {
        protocol: 'https',
        hostname: 'photosgrambucket.s3.us-east-2.amazonaws.com',
        port: '',
        pathname: '**',
    },
    {
        protocol: 'https',
        hostname: 'photosgrambucket.s3.amazonaws.com',
        port: '',
        pathname: '**',
    },
    ],
},
}