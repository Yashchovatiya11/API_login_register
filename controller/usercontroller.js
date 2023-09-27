var register_model = require('../model/registermodel');

var loginTrue = false

exports.register_user = async (req, res) => {

    var data = await register_model.find({ email: req.body.email });
    if (data.length == 1) {

        res.status(200).json({
            status: 'user is already registeres'
        })

    }

    else {
        var data = await register_model.create(req.body);

        res.status(200).json({
            status: 'registerd success',
            data
        });
    }

}

exports.login_user = async (req, res) => {

    if (loginTrue == false) {

        var data = await register_model.find({ email: req.body.email });

        if (data.length == 1) {

            if (data[0].password == req.body.password) {

                loginTrue = true

                res.status(200).json({
                    status: 'login success',
                    data
                });

            }
            else {
                res.status(200).json({
                    status: 'please check password',

                });
            }

        }

        else {
            res.status(200).json({
                status: 'user is not existed'
            })
        }
    }
    else {
        res.status(200).json({
            status: 'user already logged in'
        })
    }

}

exports.logout_user = (req,res) => {
    loginTrue = false

    res.status(200).json({
        status:"successfully logged out"
    })
}

