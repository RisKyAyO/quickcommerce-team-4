const axios = require('axios');

describe('Panier version endpoint', () => {
  test('should return version info', async () => {
    const response = await axios.get('http://localhost:3002/version');

    expect(response.status).toBe(200);
    expect(response.data.service).toBe('panier');
    expect(response.data.version).toBe('1.0.1');
    expect(response.data.team).toBeDefined();
    expect(response.data.date).toBeDefined();
  });

  test('should return health status', async () => {
    const response = await axios.get('http://localhost:3002/health');

    expect(response.status).toBe(200);
    expect(response.data.status).toBe('OK');
    expect(response.data.service).toBe('panier');
  });
});
