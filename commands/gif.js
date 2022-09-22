const fetch = require('node-fetch')

module.exports = async function(msg, args){
    //by default keyword is cat
    let keywords = 'cat'
    if(args.length > 0){
        keywords = args.join(" ")
    }
    let url = `https://tenor.googleapis.com/v2/search?q=${keywords}&key=${process.env.API_KEY}&client_key=my_test_app`
    const response = await fetch(url);
    const jsonResponse = await response.json()
    // console.log(jsonResponse)
    // get a random index from the response gif array
    const index = Math.floor(Math.random() * jsonResponse.results.length)
    // bot will send a random one from the gif array
    msg.channel.send(jsonResponse.results[index].url)
}
