module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '77af598ff8577e35694bb164f98c2a06'),
  },
});
