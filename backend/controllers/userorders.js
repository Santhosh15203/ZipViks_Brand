const userordermodel = require("../models/userorder");

exports.userorders = async (req, res, next) => {
    try {
        const {cardItems,user} = req.body
        const totalAmount = cardItems.reduce((acc, card) => {
            const discount = Number(card.product.discount)
            const fixedprice = Number(String(card.product.fixedprice).replace(/,/g, ""))
            const sellingprice = Number((fixedprice - (fixedprice * discount / 100)).toFixed(0))
            const quantity = card.custumQuantity
            return acc + (sellingprice * quantity)
        }, 0)
        const status="pending"
        const offset=5.5*60*60*1000  //in ,hrsmillsec,mins,sec,
        const creditDate=new Date(Date.now()+offset)

        const userorders = await userordermodel.create({
            user,
            cardItems, 
            totalAmount,
            status,
            creditDate
        })

        res.json({
            message: "user order success",
            userorders
        })

    } catch (error) {
        console.error("Order placement error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
