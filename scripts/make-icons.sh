#!/bin/bash
#
# Converts an svg logo into the various image resources required by
# the various platforms deployments.
#
# On debian-based systems you need these deps:
#   apt-get install xmlstarlet python3-cairosvg icnsutils

if [ $# != 1 ]
then
    echo "Usage: $0 <svg file>"
    exit
fi

set -ex

tmpdir=`mktemp -d 2>/dev/null || mktemp -d -t 'icontmp'`

for i in 1024 512 310 300 256 192 180 152 150 144 128 120 114 96 88 76 72 70 64 60 57 50 48 44 36 32 24 16
do
    #convert -background none -density 1000 -resize $i -extent $i -gravity center "$1" "$tmpdir/$i.png"

    # Above is the imagemagick command to render an svg to png. Unfortunately, its support for SVGs
    # with CSS isn't very good (with rsvg and even moreso the built in renderer) so we use cairosvg.
    # This can be installed with:
    #    pip install cairosvg==1.0.22 # Version 2 doesn't support python 2
    #    pip install tinycss
    #    pip install cssselect # These are necessary for CSS support
    # You'll also need xmlstarlet from your favourite package manager
    #
    # Cairosvg doesn't suport rendering at a specific size (https://github.com/Kozea/CairoSVG/issues/83#issuecomment-215720176)
    # so we have to 'resize the svg' first (add width and height attributes to the svg element) to make it render at the
    # size we need.
    # XXX: This will break if the svg already has width and height attributes
    cp "$1" "$tmpdir/tmp.svg"
    xmlstarlet ed -N x="http://www.w3.org/2000/svg" --insert "/x:svg" --type attr -n width -v $i "$tmpdir/tmp.svg" > "$tmpdir/tmp2.svg"
    xmlstarlet ed -N x="http://www.w3.org/2000/svg" --insert "/x:svg" --type attr -n height -v $i "$tmpdir/tmp2.svg" > "$tmpdir/tmp3.svg"
    cairosvg -f png -o "$tmpdir/$i.png"  "$tmpdir/tmp3.svg"
    rm "$tmpdir/tmp.svg" "$tmpdir/tmp2.svg" "$tmpdir/tmp3.svg"
done

# one more for the non-square mstile
cp "$1" "$tmpdir/tmp.svg"
xmlstarlet ed -N x="http://www.w3.org/2000/svg" --insert "/x:svg" --type attr -n width -v 310 "$tmpdir/tmp.svg" > "$tmpdir/tmp2.svg"
xmlstarlet ed -N x="http://www.w3.org/2000/svg" --insert "/x:svg" --type attr -n height -v 150 "$tmpdir/tmp2.svg" > "$tmpdir/tmp3.svg"
cairosvg -f png -o "$tmpdir/310x150.png"  "$tmpdir/tmp3.svg"
rm "$tmpdir/tmp.svg" "$tmpdir/tmp2.svg" "$tmpdir/tmp3.svg"

mkdir "$tmpdir/Riot.iconset"
cp "$tmpdir/16.png" "$tmpdir/Riot.iconset/icon_16x16.png"
cp "$tmpdir/32.png" "$tmpdir/Riot.iconset/icon_16x16@2x.png"
cp "$tmpdir/32.png" "$tmpdir/Riot.iconset/icon_32x32.png"
cp "$tmpdir/64.png" "$tmpdir/Riot.iconset/icon_32x32@2x.png"
cp "$tmpdir/128.png" "$tmpdir/Riot.iconset/icon_128x128.png"
cp "$tmpdir/256.png" "$tmpdir/Riot.iconset/icon_128x128@2x.png"
cp "$tmpdir/256.png" "$tmpdir/Riot.iconset/icon_256x256.png"
cp "$tmpdir/512.png" "$tmpdir/Riot.iconset/icon_256x256@2x.png"
cp "$tmpdir/512.png" "$tmpdir/Riot.iconset/icon_512x512.png"
cp "$tmpdir/1024.png" "$tmpdir/Riot.iconset/icon_512x512@2x.png"

#if [ -x "$(command -v iconutil)" ]; then
#  # available on macos
#  iconutil -c icns -o electron_app/build/icon.icns "$tmpdir/Riot.iconset"
#elif [ -x "$(command -v png2icns)" ]; then
#  # available on linux
#  # png2icns is more finicky about its input than iconutil
#  # 1. it doesn't support a 64x64 (aka 32x32@2x)
#  # 2. it doesn't like duplicates (128x128@2x == 256x256)
#  rm "$tmpdir/Riot.iconset/icon_128x128@2x.png"
#  rm "$tmpdir/Riot.iconset/icon_256x256@2x.png"
#  rm "$tmpdir/Riot.iconset/icon_16x16@2x.png"
#  rm "$tmpdir/Riot.iconset/icon_32x32@2x.png"
#  png2icns electron_app/build/icon.icns "$tmpdir"/Riot.iconset/*png
#else
#  echo "WARNING: Unsupported platform. Skipping icns build"
#fi

cp "$tmpdir/24.png" "res/vector-icons/24.png"
cp "$tmpdir/44.png" "res/vector-icons/44.png"
cp "$tmpdir/50.png" "res/vector-icons/50.png"
cp "$tmpdir/76.png" "res/vector-icons/76.png"
cp "$tmpdir/88.png" "res/vector-icons/88.png"
cp "$tmpdir/120.png" "res/vector-icons/120.png"
cp "$tmpdir/150.png" "res/vector-icons/150.png"
cp "$tmpdir/152.png" "res/vector-icons/152.png"
cp "$tmpdir/180.png" "res/vector-icons/180.png"
cp "$tmpdir/300.png" "res/vector-icons/300.png"
cp "$tmpdir/1024.png" "res/vector-icons/1024.png"

cp "$tmpdir/36.png" "res/vector-icons/android-chrome-36x36.png"
cp "$tmpdir/48.png" "res/vector-icons/android-chrome-48x48.png"
cp "$tmpdir/72.png" "res/vector-icons/android-chrome-72x72.png"
cp "$tmpdir/96.png" "res/vector-icons/android-chrome-96x96.png"
cp "$tmpdir/144.png" "res/vector-icons/android-chrome-144x144.png"
cp "$tmpdir/192.png" "res/vector-icons/android-chrome-192x192.png"
cp "$tmpdir/180.png" "res/vector-icons/apple-touch-icon.png"
cp "$tmpdir/180.png" "res/vector-icons/apple-touch-icon-precomposed.png"
cp "$tmpdir/57.png" "res/vector-icons/apple-touch-icon-57.png"
cp "$tmpdir/60.png" "res/vector-icons/apple-touch-icon-60.png"
cp "$tmpdir/72.png" "res/vector-icons/apple-touch-icon-72.png"
cp "$tmpdir/76.png" "res/vector-icons/apple-touch-icon-76.png"
cp "$tmpdir/114.png" "res/vector-icons/apple-touch-icon-114.png"
cp "$tmpdir/120.png" "res/vector-icons/apple-touch-icon-120.png"
cp "$tmpdir/144.png" "res/vector-icons/apple-touch-icon-144.png"
cp "$tmpdir/152.png" "res/vector-icons/apple-touch-icon-152.png"
cp "$tmpdir/180.png" "res/vector-icons/apple-touch-icon-180.png"
cp "$tmpdir/16.png" "res/vector-icons/favicon-16x16.png"
cp "$tmpdir/32.png" "res/vector-icons/favicon-32x32.png"
cp "$tmpdir/96.png" "res/vector-icons/favicon-96x96.png"
cp "$tmpdir/70.png" "res/vector-icons/mstile-70.png"
cp "$tmpdir/144.png" "res/vector-icons/mstile-144.png"
cp "$tmpdir/150.png" "res/vector-icons/mstile-150.png"
cp "$tmpdir/310.png" "res/vector-icons/mstile-310.png"
cp "$tmpdir/310x150.png" "res/vector-icons/mstile-310x150.png"
#cp "$tmpdir/180.png" "electron_app/img/riot.png"

convert "$tmpdir/16.png" "$tmpdir/32.png" "$tmpdir/64.png" "$tmpdir/128.png"  "$tmpdir/256.png" "res/vector-icons/favicon.ico"

#cp "res/vector-icons/favicon.ico" "electron_app/build/icon.ico"
#cp "res/vector-icons/favicon.ico" "electron_app/img/riot.ico"

# https://github.com/electron-userland/electron-builder/blob/3f97b86993d4ea5172e562b182230a194de0f621/src/targets/LinuxTargetHelper.ts#L127
#for i in 24 96 16 48 64 128 256 512
#do
#    cp "$tmpdir/$i.png" "electron_app/build/icons/${i}x${i}.png"
#done

rm -r "$tmpdir"
