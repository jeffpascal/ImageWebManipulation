import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';
import imageminWebp from 'imagemin-webp';

async function test(){
    const files = await imagemin(['./imagesToCompress/*.{jpg,png,jpeg}'], {
        destination: './images',
        plugins: [
            imageminJpegtran(),
            // imageminPngquant({
            //     quality: [0.4, 0.7]
            // }),
            imageminWebp({
                  quality: 75
                  ,
                  resize: {
                    width: 1350,
                    height: 0
                  }
              }),
        ]
    });
    console.log(files);
}
test()
