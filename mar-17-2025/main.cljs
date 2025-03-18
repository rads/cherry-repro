(add-tap prn)
(tap> :foo)
(prn :foo2)
(js/setTimeout #(remove-tap prn) 1000)
