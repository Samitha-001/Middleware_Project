const bill = require("../models/Bill")

const billdetailById = (req, res) => {
    const id = req.params.id

    try {
        const billDetail = bill.findById(id)
        res.json(billDetail) 
    } catch (error) {
        console.log("bill id error")
        res.status(500).jason({error : "Error"})
    }


}

module.exports = billdetailById