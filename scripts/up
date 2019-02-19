#!/bin/bash
# depends on ifstat

/usr/local/bin/ifstat -n -z -S 1 1 | awk 'FNR == 3 {print $3}'
