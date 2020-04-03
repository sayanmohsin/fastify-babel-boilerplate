var userService = {}

userService.getAllUser = async () => {
    try {
        var users = {
            name: "zlatan",
            username: "zlatan"
        }
        return users
    } catch (err) {
        throw(err)
    }
}

export {
    userService
}