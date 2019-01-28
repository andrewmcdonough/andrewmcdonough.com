====== Vim ======

Vim is the most popular clone of the vi text editor, and is my text editor of choice for programming.


===== .vimrc =====

  set noautoindent
  set tabstop=2
  set shiftwidth=2
  set backspace=2

  map ;s :!php -l %<CR>

  map ;w oprint STDERR "\n";<ESC>hhhi

  map ;e :!php  %<CR>


