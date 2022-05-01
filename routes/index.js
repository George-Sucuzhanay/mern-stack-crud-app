const { Router } = require("express")
const controllers = require("../controllers")
const router = Router()

router.get("/", (req,res) => res.send("This is the root!"))
router.post("/items", controllers.createItem)
router.get("/items", controllers.getAllItems)
router.get("/items/:id", controllers.getItemById)
router.put("/items/:id", controllers.updateItem)
router.delete("/items/:id", controllers.deleteItem)

module.exports = router;


// put update the entire document
// patch update a small part of a document
// the use of put and patch varies on use case and company standards
