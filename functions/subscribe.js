
export default {
    async fetch(request, env) {
      const defaultData = { todos: [] };
  
      const setCache = (key, data) => env.FNDX_NEWSLETTER.put(key, data);
      const getCache = key => env.FNDX_NEWSLETTER.get(key);
  
      async function subscribe(request) {
        const url = new URL(request.url);
        console.log(url)
        
        const searchParams = url.searchParams
        const mail = searchParams.get('mail');
        console.log(mail);
  
        await setCache(mail, JSON.stringify({
          subscribe: true,
          timestamp: new Date().getTime()
        }))
        
        return new Response(JSON.stringify({
          code: 0,
          message: "Success"
        }), { status: 200, headers: { 'Content-Type': 'application/json'} });
      }
  
      const url = new URL(request.url);
      console.log(url)
      
      const pathname = url.pathname
      const paths = pathname.split('/')
      console.log('pathname', pathname, 'paths', paths)
  
    //   if (paths.length > 1 && paths[1] == 'subscribe') {
        return await subscribe(request)
    //   }
    //   return new Response("Error", { status: 500 });
    }
  };
  