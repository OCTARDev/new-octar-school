const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["schooloctarback.adgrouptech.com"],
        unoptimized:true
    }
};
 
module.exports = withNextIntl(nextConfig);