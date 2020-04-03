(async () => {
  try {
    const fastifyOpts = {
      logger: true,
      http2: false
    }
    const { default: Fastify } = await import('fastify')
    const fastify = Fastify(fastifyOpts)

    //routes
    fastify.register(import('./routes/v1/users'), { prefix: '/v1/users' })
    // fastify.register(await import('./routes/v1/users'), { prefix: '/v1/users' })

    fastify.addHook('onError', async (request, reply, error) => {
      reply
      .code(400)
      .send(error)
    })

    startServer(fastify)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})()

/**
 * Start server
 */

const startServer = async (fastify) => {
  try {
    let port = normalizePort(process.env.PORT || '38000');
    await fastify.listen(port)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
    return
  } catch (err) {
    console.log('err: ', err);
    fastify.log.error(err)
    process.exit(1)
  }
}

/**
 * Normalize a port into a number, string, or false.
 */

const normalizePort = (val) => {
  var port = parseInt(val, 10)

  if (isNaN(port))
    return val

  if (port >= 0)
    return port

  return false
}

// // Declare a route
// fastify.get('/', async (request, reply) => {
//   return { hello: 'world' }
// })

// // Run the server!
// const start = async () => {
//   try {
//     await fastify.listen(3000)
//     fastify.log.info(`server listening on ${fastify.server.address().port}`)
//   } catch (err) {
//     fastify.log.error(err)
//     process.exit(1)
//   }
// }
// start()