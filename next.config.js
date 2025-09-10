const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"schooloctarback.adgrouptech.com"
            }
        ],
        unoptimized:true
    }
};
 
module.exports = withNextIntl(nextConfig);