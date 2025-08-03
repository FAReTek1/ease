costumes "blank.svg";

%include inflator/assert
%include inflator/math
%include inflator/lazy

%include inflator/ease

onflag {main;}
nowarp proc main {
    forever {
        erase_all;
        set_pen_size 10;
        set_x ease_inout_circ(0, 100, 0, 1);
        pen_du;
    }
}
