const { apiError, apiSuccess } = require('../middleware/responseMiddleware');

let users = [];

exports.createUser = (req, res) => {
    try {
        const { username, password } = req.body;
        users.push({ username, password });
        res.apiSuccess(null, 'User created successfully', 201);
    } catch (error) {
        res.apiError('Internal Server Error', 500);
    }
};

exports.getAllUsers = (req, res) => {
    try {
        res.apiSuccess(users);
    } catch (error) {
        res.apiError('Internal Server Error', 500);
    }
};

exports.getUserByUsername = (req, res) => {
    try {
        const { username } = req.params;
        const user = users.find(user => user.username === username);
        if (!user) {
            return res.apiError('User not found', 404);
        }
        res.apiSuccess(user);
    } catch (error) {
        res.apiError('Internal Server Error', 500);
    }
};

exports.updateUser = (req, res) => {
    try {
        const { username } = req.params;
        const { password } = req.body;
        const userIndex = users.findIndex(user => user.username === username);
        if (userIndex === -1) {
            return res.apiError('User not found', 404);
        }
        users[userIndex].password = password;
        res.apiSuccess(null, 'User updated successfully');
    } catch (error) {
        res.apiError('Internal Server Error', 500);
    }
};

exports.deleteUser = (req, res) => {
    try {
        const { username } = req.params;
        users = users.filter(user => user.username !== username);
        res.apiSuccess(null, 'User deleted successfully');
    } catch (error) {
        res.apiError('Internal Server Error', 500);
    }
};
