# mt-drawtext Integration for QBCore

This script integrates the `mt-drawtext` resource with the **QBCore** framework, providing a simple and modular way to display, update, and hide 3D text in the client environment.

---

## 🔧 What This Script Does

It replaces the default `qb-core/client/drawtext.lua` with a new implementation that uses the exported functions from `mt-drawtext`. This ensures better control and flexibility for drawing text in 3D space within your FiveM server.

---

## 📥 Installation

1. Make sure the `mt-drawtext` resource is correctly installed and running on your server.

2. Navigate to your `qb-core` resource folder and **replace all contents** of:

qb-core/client/drawtext.lua


with the following code:

```lua
local function hideText()
    exports['mt-drawtext']:HideText()
end

local function drawText(text, position)
    exports['mt-drawtext']:DrawText(text)
end

local function changeText(text, position)
    exports['mt-drawtext']:DrawText(text)
end

local function keyPressed()
    CreateThread(function()
        exports['mt-drawtext']:HideText()
        Wait(500)
    end)
end

RegisterNetEvent('qb-core:client:DrawText', function(text, position)
    drawText(text, position)
end)

RegisterNetEvent('qb-core:client:ChangeText', function(text, position)
    changeText(text, position)
end)

RegisterNetEvent('qb-core:client:HideText', function()
    hideText()
end)

RegisterNetEvent('qb-core:client:KeyPressed', function()
    keyPressed()
end)

exports('DrawText', drawText)
exports('ChangeText', changeText)
exports('HideText', hideText)
exports('KeyPressed', keyPressed)
```


The letter between the brackets (in this case `E`) will appear in the lower interaction box, while the rest of the text (`Open Bank`) will appear in the main area above. This format should be followed consistently across all exports and translations that use `DrawText`.

## ⚠️ Notes

- This script requires the `mt-drawtext` resource to be running.
- Avoid conflicts by ensuring no other systems are drawing 3D text in the same context.

## 📂 Compatibility

- Framework: QBCore  
- Resource Dependency: mt-drawtext  
- Server Type: FiveM

Made for easy integration and improved control over 3D text in your roleplay environment.

