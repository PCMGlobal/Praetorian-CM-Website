const {createClient} = require('@sanity/client');
const c = createClient({projectId:'ke8lgl8i',dataset:'production',useCdn:false,apiVersion:'2024-01-01'});
c.fetch('count(*[_type == "article" && defined(slug.current)])').then(r => console.log('Total count:', r)).catch(e => console.error(e.message));
