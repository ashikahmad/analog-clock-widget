###
Analog-clock widget
Author: Ashik uddin Ahmad (ashik.u.ahmad@gmail.com)

Basic idea (and default theme) is ported and improved from a tutorial of Toby Pitman (http://css-tricks.com/css3-clock/).
Other themes are extracted from various win7 clock gadgets. So those may not be used considering copyright.
Those are only for example purposes to show how to add and apply a new theme.
###

# Run `systemsetup -listtimezones` in terminal to find list of possible timezones
# Keep empty (i.e. "") to use system default timezone
# zone = ""

# No need to change this
# zoneSet = if zone.length then "export TZ='#{zone}'; " else ""

clockLabel: "Dhaka"

# command: "#{zoneSet}date +'%H:%M:%S'"
command: "echo hello"
 
refreshFrequency: 1000

render: (output) -> """
		<ul id='clock'>
		<li id='sec'></li>
		<li id='hour'></li>
		<li id='min'></li>
		<li id='clock-label'>#{@clockLabel}</li>
	</ul>
	"""
 
style: """
	clock-size = 150px
	hand-width = 7px
	hand-height = 150px
	image-folder = 'default'

	url-for(image-name)
		url('analog-clock.widget/'+image-folder+'/'+image-name)

	bottom: 110px
	left: 20px

	#clock
		position: relative
		width: clock-size
		height: clock-size
		margin: 5px auto 0 auto
		background: url-for('clockface.png') no-repeat
		list-style: none

	#clock-label
		position: absolute
		font: 10px Arial
		color: rgba(#000, 0.8)
		width: clock-size
		top: (clock-size/3.2)
		left: 0
		text-align: center
		z-index: 1

	#sec, #min, #hour
		position: absolute
		width: hand-width
		height: hand-height
		top: round((clock-size - hand-height)/2)
		left: round((clock-size - hand-width)/2)

	#sec
		background: url-for('sechand.png')
		z-index: 4

	#min
		background: url-for('minhand.png')
		z-index: 3

	#hour
		background: url-for('hourhand.png')
		z-index: 2
"""

update: (output, domEl) ->
	# Date from Unix Terminal
	# comp = output.split ":"
	# seconds = comp[2]; mins = comp[1]; hours = comp[0]

	# Date from Javascript
	date = new Date(); seconds = date.getSeconds(); mins = date.getMinutes(); hours = date.getHours()
	
	sdegree = seconds * 6; srotate = "rotate(" + sdegree + "deg)"
	mdegree = mins * 6 + (seconds / 10); mrotate = "rotate(" + mdegree + "deg)"
	hdegree = hours * 30 + (mins / 2); hrotate = "rotate(" + hdegree + "deg)"

	$(domEl).find("#sec").css "transform", srotate
	$(domEl).find("#min").css "transform", mrotate
	$(domEl).find("#hour").css "transform", hrotate
