import 'package:flutter/material.dart';

class RegisterScreen extends StatelessWidget {
  final _nameController = TextEditingController();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          children: [
            TextFormField(
              controller: _nameController,
              keyboardType: TextInputType.phone,
              decoration: InputDecoration(labelText: 'Phone'),
            ),
            TextFormField(
              controller: _emailController,
              keyboardType: TextInputType.emailAddress,
              decoration: InputDecoration(labelText: 'Email'),
            ),
            TextFormField(
              controller: _passwordController,
              style: TextStyle(backgroundColor: Color(0xFFD63031)),
              decoration: InputDecoration(labelText: 'Password'),
              obscureText: true,
            ),
            SizedBox(height: 20),
            ElevatedButton(
              child: Text('Register'),
              onPressed: () {
                print('Register: ${_nameController.text}, ${_emailController.text}');
                Navigator.pop(context);
              },
            ),
          ],
        ),
      ),
    );
  }
}
