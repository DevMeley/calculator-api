const express = require ('express')
const router = express.Router()

// Adition
router.post('/Add', (req, res) =>{
    const {num1, num2} = req.body
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        res.status(400).json({ message: "Please enter valid numbers." });
        return;
      }
    const sum = num1 + num2
    res.status(201).json({sum})
})

// substraction
router.post('/subtract', (req, res) => {
    const {num1, num2} = req.body
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        res.status(400).json({ message: "Please enter valid numbers." });
        return;
      }
    const difference = num1 - num2
    res.status(201).json({difference})
})

router.post('/multiply', (req, res) =>{
    const {num1, num2} = req.body
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        res.status(400).json({ message: "Please enter valid values." });
        return;
      }
    const product = num1 * num2
    res.status(201).json({product})
})

router.post('/divide', (req, res) =>{
    const {num1, num2} = req.body
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        res.status(400).json({ message: "Please enter valid values." });
        return;
      }
    else if (num2 === 0) {
        return res.status(400).json({ error: 'Division by zero is not allowed' });
    }
    const quotient = num1 / num2
    res.status(201).json({quotient})
})

module.exports = router