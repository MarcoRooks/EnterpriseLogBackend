function getAllCompany(req, res) {
    companiesManager.getAll()
    res.status(200).json("Get All company")
}

module.exports = getAllCompany;