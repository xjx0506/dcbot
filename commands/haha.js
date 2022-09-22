const replies = [ 'Have a great day!', 
                  'You are awesome!', 
                  'Nice to meet you!', 
                  'I am Sam',
                  '我是你爹']
                  
module.exports = function(msg, args){
    const index = Math.floor(Math.random() * replies.length) 
    msg.channel.send(replies[index])

}

