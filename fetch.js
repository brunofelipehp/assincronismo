const promessa = new Promise(function(resolve, reject) {
    return resolve('tudo ok!!!')
})


async function start() {
    
    try {

    const result = await promessa
    console.log(result);

    } catch (error) {

     console.log(error);   

    }finally{
        console.log('rodar sempre');
    }

}

start()