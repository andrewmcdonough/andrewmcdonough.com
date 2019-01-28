====== Taglibs ======

===== Jakarta Mailer =====

  <mt:mail>
        <mt:server><%= mailServer %></mt:server>
        <mt:from><%= from %></mt:from>
        <mt:subject><%= subject %></mt:subject>
        <mt:message><%= messageBody %></mt:message>
        <mt:setrecipient type="to"><%= to %></mt:setrecipient>
        <mt:send>
        <mt:error id="err">
        <jsp:getProperty name="err" property="error"/>
        </mt:error>
        </mt:send>
  </mt:mail>

