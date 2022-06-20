# README NOT UPDATED YET SINCE LAST MODIFICATIONS

# BezierCurvesUsingHTMLCanvas
 Manual implementation of Cubic Bezier Curves using HTML Canvas

### General Information
* The objective of this repository is to try to recreate the Photoshop Pen Tool using HTML Canvas for research and practice purposes only. (_Not finished yet_)
* It will be updated as I develop new stuff.

### What do i have at this point
- I have a canvas
- You can click at any spot to create a Point
- You can drag any Point to any other spot inside the canvas
- Each 4 points, a curve is created  
To understand the bezier curves a bit better:  
- The black points are the initial and ending points of the 4 anchor point curve
- The red points are the middle points, where the curve is interpolated (the curve does not intersect with these red points)  

_It's like the black points are those "anchor points" of the Photoshop pen tool and the red points are those points where you can change the curvature of the line/curve you created with the anchor points._