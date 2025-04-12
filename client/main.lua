local showing = false

function DrawTextUI(text)
    if showing then return end
    showing = true
    SendNUIMessage({
        action = 'show',
        text = text
    })
    SetNuiFocus(false, false)
end

function HideTextUI()
    if not showing then return end
    showing = false
    SendNUIMessage({
        action = 'hide'
    })
end

exports('DrawText', function(text)
    DrawTextUI(text)
end)

exports('HideText', function()
    HideTextUI()
end)
