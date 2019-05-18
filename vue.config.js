module.export = {
    publickPath: process.env.NODE_ENV === 'production' 
    ? '/hello-contacts/' 
    : '/' 
    }