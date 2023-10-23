module.exports = {
  apps: [
    {
      name: "JCWD-2502-03", // Format JCWD-{batchcode}-{groupnumber}
      script: "./projects/server/src/index.js",
      env: {
        NODE_ENV: "production",
        PORT: 2503,
      },
      time: true,
    },
  ],
};
