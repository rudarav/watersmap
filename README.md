# watersmap
Мапа водойм Лановецької міської ТГ, що можуть бути передані в оренду

800x500

ls -v | cat -n | while read n f; do mv -n "$f" "$(printf "Lanivtsi4_%d.jpg" "$((n))")"; done

for f in *.jpg; do squoosh-cli --mozjpeg '{"quality":75,"baseline":false,"arithmetic":false,"progressive":true,"optimize_coding":true,"smoothing":0,"color_space":3,"quant_table":3,"trellis_multipass":false,"trellis_opt_zero":false,"trellis_opt_table":false,"trellis_loops":1,"auto_subsample":true,"chroma_subsample":2,"separate_chroma_quality":false,"chroma_quality":75}' $f; done
