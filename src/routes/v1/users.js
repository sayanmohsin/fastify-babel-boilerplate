export default async (fastify, opts = {}, done) => {
    //services imports
    const [
        { userService }
    ] = await Promise.all([
        import('../../services/user.service')
    ])

    //routes
    fastify.get('/', opts, async (request, reply) => {
        try {        
            var users = await userService.getAllUser()
            reply.send(users)
        } catch (err) {
            throw err
        }
    })

    done()
}


