function calculateFee(status) {
  switch (status) {
    case 'student':
      return 10;
    case 'staff':
      return 50;
    case 'volunteer':
      return 0;
    default:
      throw new Error('Invalid status');
  }
}

module.exports = { calculateFee };
