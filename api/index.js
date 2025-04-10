// Simple API status check
module.exports = (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Resume Portfolio API is running',
    time: new Date().toISOString()
  });
};
