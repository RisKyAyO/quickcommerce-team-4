#!/bin/bash
echo "Checking all services..."
echo ""
echo "=== Catalogue Service ==="
curl -s http://localhost:3001/health | python3 -m json.tool 2>/dev/null || echo "Service unavailable"

echo ""
echo "=== Panier Service ==="
curl -s http://localhost:3002/health | python3 -m json.tool 2>/dev/null || echo "Service unavailable"

echo ""
echo "=== Commandes Service ==="
curl -s http://localhost:3003/health | python3 -m json.tool 2>/dev/null || echo "Service unavailable"

echo ""
echo "All health checks done!"
