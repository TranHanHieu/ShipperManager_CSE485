const mongoose = require('mongoose');
// const order_userSchema = require('./order_userSchema');
// let order_userModel = mongoose.model('order_user', order_userSchema, 'order_user');

const ordersModel = require('../orders/ordersModel');
const userModel = require('../users/usersModel');
const ship_historyModel = require('../ship_history/ship_historyModel');
//status : 
// -1: Đơn bị hủy
// 0: Đơn hàng mới
// 1: Nhận đơn
// 2: Bắt đầu giao
// 3: Hoàn thành

//Xử lý đơn hàng
const receiveOrder = async (order_user, status, longtitude, latitude, address) => {
    try
    {
        var history = {
            order : order_user.order,
            address : address,
            longtitude : longtitude,
            latitude : latitude
        }


        //Nhận đơn
        if(status === 1)
        {
            await ordersModel.updateUserInOrder(order_user.order, order_user.user);
            if(result != null && result != {})
            {
                return await ordersModel.updateStatusOrder(order_user.order, 1);
            }
        }
        else if(status === 2 || status === 3)
        {
            //Thêm tọa độ tại điểm nhận đơn hoặc kết thúc
           
            await ship_historyModel.insertHistory(history);
            
            //Update trạng thái thành 2, 3
            return await ordersModel.updateStatusOrder(order_user.order, status);
        }
        else if(status === 4)
        {
            await ship_historyModel.insertHistory(history);
        }
        else 
        {
            //đơn hàng Bị hủy
            return await ordersModel.updateStatusOrder(order_user.order, -1);
        }
    }
    catch(err)
    {
        return null;
    }
}

// const selectByIdUser = async(idUser) => {
//     return await order_userModel.find({user : idUser}).populate({
//         path: 'order',
//         model: ordersModel
//     })
//     .exec();
// }

// const selectByIdOrder = async(idOrder) => {
//     return await order_userModel.find({order : idOrder}).exec();
// }

module.exports = {
    receiveOrder
}