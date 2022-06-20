# BezierCurvesUsingHTMLCanvas
 Manual implementation of Cubic Bezier Curves using HTML Canvas

### General Information
* The objective of this repository is to try to recreate the Photoshop Pen Tool using HTML Canvas for research and practice purposes only. (_Not finished yet_)
* It will be updated as I develop new stuff.

### What do i have at this point (besides bugs)
- A <s>beautiful</s> canvas
- You can click at any spot to create an Anchor Point and two angle points linked to that anchor point
- You can drag any anchor point and angle point to any other spot inside the canvas
- Each 2 anchor points, a curve is created using 1º anchor point, its right angle point, the 2ª anchor point's left angle point and, finnaly, the 2º anchor point   
- A Ctrl+Z command to erase the last point created (note that it doesn't undo the last change on the canvas, this yet has to be done)
To understand the bezier curves a bit better:  
- The black points are the initial and ending points of the 4 point curve
- The red points are the angle points, where the curve is interpolated (the curve does not intersect with these red points)  

_It's like the black points are those "anchor points" of the Photoshop pen tool and the red points are those angle points where you can change the curvature of the line/curve you created with the anchor points._


#### TO DO
- There's a problem when clicking and dragging an anchor point: the angleLeft and angleRight switch places (????)