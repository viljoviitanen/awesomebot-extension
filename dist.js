a=message.suffix.split(',')
sys1=a[0].trim()
sys2=a[1].trim()
unirest.get('http://www.edsm.net/api-v1/system?sysname='+sys1+'&coords=1')
.end(function (r1) {
  unirest.get('http://www.edsm.net/api-v1/system?sysname='+sys2+'&coords=1')
    .end(function (r2) {
    x1=r1.body.coords.x
    y1=r1.body.coords.y
    z1=r1.body.coords.z
    x2=r2.body.coords.x
    y2=r2.body.coords.y
    z2=r2.body.coords.z
    dx=x1-x2
    dy=y1-y2
    dz=z1-z2
    dist=Math.sqrt(dx*dx+dy*dy+dz*dz).toFixed(1)
    r="Distance between "+sys1+" and "+sys2+" is "+dist
    ch.sendMessage(r);
  });
});
