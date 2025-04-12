local showing = false

-- Mostrar texto NUI sin opciones de posición
function DrawTextUI(text)
    if showing then return end
    showing = true
    SendNUIMessage({
        action = 'show',
        text = text
    })
    SetNuiFocus(false, false)
end

-- Ocultar texto NUI
function HideTextUI()
    if not showing then return end
    showing = false
    SendNUIMessage({
        action = 'hide'
    })
end

-- Exportar funciones
exports('DrawText', function(text)
    DrawTextUI(text)
end)

exports('HideText', function()
    HideTextUI()
end)
