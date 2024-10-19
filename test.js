const staticBlob = new Blob([/* binary data */], { type: 'image/png' });
const staticUrl = URL.createObjectURL(staticBlob);
img.src = staticUrl;
rrr