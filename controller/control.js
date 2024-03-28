// Endpoint untuk membuat user baru
app.post('/api/users', (req, res) => {
    const { username, email } = req.body;
    const newUser = { username, email };
    
    db.query('INSERT INTO users SET ?', newUser, (err, result) => {
        if (err) {
            res.status(500).send('Error creating user');
            return;
        }
        newUser.id = result.insertId;
        res.json(newUser);
    });
});

// Endpoint untuk mendapatkan semua users
app.get('/api/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving users from database');
            return;
        }
        res.json(results);
    });
});

// Endpoint untuk mendapatkan user berdasarkan ID
app.get('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    db.query('SELECT * FROM users WHERE id = ?', userId, (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving user from database');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('User not found');
            return;
        }
        res.json(results[0]);
    });
});

// Endpoint untuk mengupdate user berdasarkan ID
// app.put('/api/users/:id', (req, res) => {
//     const userId = req.params.id;
//     const { username, email } = req.body;
//     const updateUser = { username, email };
    
//     db.query('UPDATE users SET ? WHERE id = ?', [updateUser, userId], (err, result) => {
//         if (err) {
//             res.status(500).send('Error updating user');
//             return;
//         }
//         res.json(updateUser);
//     });
// });

// Endpoint untuk menghapus user berdasarkan ID
app.delete('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    
    db.query('DELETE FROM users WHERE id = ?', userId, (err, result) => {
        if (err) {
            res.status(500).send('Error deleting user');
            return;
        }
        res.send(`User with ID ${userId} deleted successfully`);
    });
});

// Jalankan server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});