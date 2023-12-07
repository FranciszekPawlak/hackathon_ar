export function getDistanceFromLatLonInM(lat1: any, lon1: any, lat2: any, lon2: any) {
    const R = 6371; // Średnica Ziemi w kilometrach
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c * 1000; // Odległość w metrach
    return d;
  }
  
  function deg2rad(deg: any) {
    return deg * (Math.PI / 180);
  }
  

  
